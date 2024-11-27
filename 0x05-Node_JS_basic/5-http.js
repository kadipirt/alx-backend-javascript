const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * counts the students in csv datafile 
 * @param {string} datapth the path to the csv file
 */

const countStudents = (datapath) => new Promise((resolve, reject) => {
fs.readFile(datapath, 'utf-8', (err, data) => {
if (err) {
reject(new Error('cannot load the database'));}
if (data) {
const fileLines = data
		.toString('utf-8')
		.trim()
		.split('\n');

const studentGroups = {};
const dbFieldNames = fileLines[0].split(',');
const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
for (const line of fileLines.slice(1)){
const studentRecord = line.split(',');
const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
const field = studentRecord[0, studentRecord.length - 1];
if (!Object.keys(studentGroups).includes(field)){
studentGroups[field] = [];}
const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
studentGroups[field].push(Object.fromEntries(studentEntries));
}
const totalStudents = Object
		.values(studentGroups)
		.reduce((pre, cur) => (pre || []).length + cur.length);
console.log(`Number of students: ${totalStudents}`);
for (const [field, group] of Object.entries(studentGroups)){
const studentNames = group.map((student) => student.firstname).join(', ');
console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
}
resolve(true);
}
});
});

const SERVER_ROUTE_HANDLERS = [
	{
		route: '/',
	handler(_, res){
	const responseText = 'Hello Holberton School!';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', responseText.length);
	res.statusCode = 200;
	res.write(Buffer.from(responseText));
	},
	},
	{
	route: '/students',
	handler(_, res){
	const responseParts = ['This is the list of our students'];
	countStudents(DB_FILE)
			.then((report) => {
			responseParts.push(report);
			const responseText = responseParts.join('\n');
			res.setHeader('Content-Type', 'text/plain');
			res.setHeader('Content-Length', responseText.length);
			res.statusCode = 200;
			res.write(Buffer.from(responseText));
			});
	},
	},
];

app.on('request', (req, res) => {
for (const routeHandler of SERVER_ROUTE_HANDLERS){
	if (routeHandler.route === req.url){
	routeHandler.handler(req, res);
	}
}
});

app.listen(PORT, HOST, () => {
process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});
module.exports = app;

