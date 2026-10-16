const cors = require("cors");
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./undeadwhimsy.db", (err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to SQLite database.");
    }
});
db.run(`
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        address TEXT NOT NULL,
        items TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);   
app.post("/api/orders", (req, res) => {

    console.log("ORDER RECEIVED:");
    console.log(req.body);

    const { name, email, address, items } = req.body;
    const sql = `
        INSERT INTO orders (name, email, address, items)
        VALUES (?, ?, ?, ?)
    `;

    db.run(
        sql,
        [
            name,
            email,
            address,
            JSON.stringify(items)
        ],
        function (err) {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    error: "Failed to save order"
                });
            }

            res.json({
                success: true,
                orderId: this.lastID
            });
        }
    );
});

 app.get("/api/orders/:id", (req, res) => {
    const sql = `
        SELECT *
        FROM orders
        WHERE id = ?
    `;

    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "Failed to retrieve order"
            });
        }

        if (!row) {
            return res.status(404).json({
                error: "Order not found"
            });
        }

        row.items = JSON.parse(row.items);

        res.json(row);
    });
});
app.get("/api/orders", (req, res) => {
    const sql = `
        SELECT *
        FROM orders
        ORDER BY id DESC
    `;

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "Failed to retrieve orders"
            });
        }

        rows.forEach(row => {
            row.items = JSON.parse(row.items);
        });

        res.json(rows);
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});