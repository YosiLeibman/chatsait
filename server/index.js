const express = require('express')
const mysql = require('mysql')
const uuid = require('uuid')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'shadchanit'
})

connection.connect(err => {
	if (err) throw err
	console.log('connected to mySql DB')
})

app.get('/students', (req, res) => {
	connection.query(`select * FROM students`, (error, results, fields) => {
		if (error) throw error
		res.json(results)
	})
})

app.get('/all', (req, res) => {
	connection.query(
		`select 
        measurements.length,
        students.f_name,
        students.l_name,
        teachers.f_name AS teacher_f,
        teachers.l_name AS teacher_l
    from measurements
        inner join students on students.id = measurements.student_id
        inner join teachers on teachers.id = measurements.teacher_id`,
		(error, results, fields) => {
			if (error) throw error
			res.json(results)
		}
	)
})

app.get('/:id', (req, res) => {
	connection.query(
		`select 
    measurements.length,
    students.f_name,
    students.l_name,
    teachers.f_name AS teacher_f,
    teachers.l_name AS teacher_l
from measurements
    inner join students on students.id = measurements.student_id
    inner join teachers on teachers.id = measurements.teacher_id
		 WHERE students.id = ${req.params.id}`,
		(error, results, fields) => {
			if (error) throw error
			res.json(results)
		}
	)
})

app.post('/register', (req, res) => {
	if (req.body.f_name && req.body.l_name) {
		connection.query(
			`INSERT INTO teachers (f_name, l_name) VALUES ("${req.body.f_name}","${
				req.body.l_name
			}")`,
			(error, results, fields) => {
				if (error) throw error
				res.json(results)
			}
		)
	} else {
		res.status(400).send('no student informations provided')
	}
})

app.post('/login', (req, res) => {
	if (req.body.f_name && req.body.l_name) {
		connection.query(
			`SELECT id FROM teachers WHERE f_name = "${req.body.f_name}"`,
			(error, results) => {
				if (error) throw error
				res.json(results)
			}
		)
	}
})

app.post('/new-student', (req, res) => {
	if (req.body.f_name && req.body.l_name) {
		connection.query(
			`INSERT INTO students (f_name, l_name) VALUES ("${req.body.f_name}","${
				req.body.l_name
			}")`,
			(error, results, fields) => {
				if (error) throw error
				res.json(results)
			}
		)
	} else {
		res.status(400).send('no student informations provided')
	}
})

app.post('/new-measurement', (req, res) => {
	if (req.body.student_id && req.body.teacher_id && req.body.length) {
		connection.query(
			`INSERT INTO measurements (student_id, teacher_id, length) VALUES (${
				req.body.student_id
			},${req.body.teacher_id},${req.body.length})`,
			(error, results, fields) => {
				if (error) throw error
				res.json(results)
			}
		)
	} else {
		res.status(400).send('no student informations provided')
	}
})

app.listen(3000, _ => {
	console.log('server started on port 3000')
})
