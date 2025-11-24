const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// configuracio ejs
app.set('views', './views');
app.set('view engine', 'ejs');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'futbolcr7',
    database: 'node_crud',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error en la conexion:', err);
    } else {
        console.log('Conexion establecida con la base de datos');
    }
});

// Mostrar login como pantalla principal
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// ver que la cueta sea valida
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const consulta = 'SELECT * FROM cuentas WHERE email = ? AND password = ?';

    db.query(consulta, [email, password], (err, results) => {
        if (err) {
            console.error('Error en login:', err);
            return res.send('Error en el servidor');
        }

        if (results.length > 0) {
            res.redirect('/dashboard');
        } else {
            res.send(`
                <h2>Credenciales incorrectas</h2>
                <p>El correo o la contraseña no coinciden.</p>
                <button onclick="window.location.href='/login'">
                    Regresar
                </button>
            `);
        }
    });
});

//regsutar nuevo usaurio
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    const insertar = 'INSERT INTO cuentas (email, password) VALUES (?, ?)';

    db.query(insertar, [email, password], (err) => {
        if (err) {
            console.error('Error al registrar:', err);
            return res.send('Error al crear usuario');
        }

        res.send(`
            <h2>Usuario creado correctamente</h2>
            <button onclick="window.location.href='/login'">Volver al login</button>
        `);
    });
});

app.get('/dashboard', (req, res) => {
    const consulta = 'SELECT * FROM users';

    db.query(consulta, (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.send('Error en la consulta a la base de datos');
        } else {
            res.render('index', { users: results });
        }
    });
});

app.post('/add', (req, res) => {
    const { name, email } = req.body;

    const consulta = 'INSERT INTO users (name, email) VALUES (?, ?)';

    db.query(consulta, [name, email], (err) => {
        if (err) {
            console.error('Error al agregar usuario:', err);
            res.send('Error al agregar usuario');
        } else {
            res.redirect('/dashboard');
        }
    });
});

app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const consultaUpdate = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

    db.query(consultaUpdate, [name, email, id], (err) => {
        if (err) {
            console.error('Error', err);
            res.send('Error al actualizar usuario');
        } else {
            res.redirect('/dashboard');
        }
    });
});

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;

    const consultaElimina = 'DELETE FROM users WHERE id = ?';

    db.query(consultaElimina, [id], (err) => {
        if (err) {
            console.error('Error', err);
            res.send('Error al eliminar usuario');
        } else {
            res.redirect('/dashboard');
        }
    });
});

const port = 3008;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});