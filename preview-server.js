const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the dist directory
app.use('/dist', express.static(path.join(__dirname, 'dist'), {
    dotfiles: 'allow',
    index: false,
    setHeaders: (res, path) => {
        if (path.endsWith('.svg')) {
            res.set('Content-Type', 'image/svg+xml');
        }
    }
}));

// Enable directory listing for SVG folder
app.get('/dist/iconLibrary/svg/', (req, res) => {
    const fs = require('fs');
    const svgDir = path.join(__dirname, 'dist/iconLibrary/svg');
    
    fs.readdir(svgDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading directory');
        }
        
        const html = `
            <html>
                <body>
                    ${files
                        .filter(file => file.endsWith('.svg'))
                        .map(file => `<a href="${file}">${file}</a>`)
                        .join('<br>')}
                </body>
            </html>
        `;
        
        res.send(html);
    });
});

// Serve the preview page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'preview.html'));
});

app.listen(port, () => {
    console.log(`Preview server running at http://localhost:${port}`);
    console.log('Press Ctrl+C to stop the server');
}); 