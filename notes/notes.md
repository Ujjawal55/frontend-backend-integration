# Method to connect the fronted and backend

### directory structure
```text
project/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── backend/
    └── main.py

```
### frontend approach
```text
  HTML:
    <html>
     <head>
        <link rel="stylesheet" type="text/css"  href="index.css">
     </head>
        <body>
            <h1> this is the html body </h1>
            <div id="button">
                <p>click me for greeting</p>
            </div>
        </body>
        <script src="index.js"> </script>
    </html>

    JS:

    document.addEventListener("DOMContentLoaded", function() {
        const greetingDiv = document.getElementById("button");
        if (greetingDiv) {
            greetingDiv.addEventListener("click", async () => {
                try{
                    const response = await fetch("http://localhost:8000/greeting", {
                        method: "GET",
                        credentials: 'include',
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    if (!response.ok) {
                        throw new Error("Request not entertained");
                    }

                    const data = await response.json();
                    greetingDiv.innerText = data.message;

                } catch(error) {
                    console.error("error", error);
                }

            });
        }
    });
```

**NOTE**: Then start the frontend server using the command
```bash
    python3 -m http.server 3000
```


# Backend part
```python
    from fastapi import FastAPI
    from fastapi.middleware.cors import CORSMiddleware


    app = FastAPI()


    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]

    )

    @app.get("/greeting")
    async def gretting():
        return {
            "message": "hello, beautiful",

        }
```

# Tailwind installation guild

```text
cd frontend
npm init -y
npm install -D tailwindcss
npx tailwindcss init

module.exports = {
  content: [
    "./src/*.{html,js}",  // Keep all the html, css, js in this file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# ADD this to styles.css file
@tailwind base;
@tailwind components;
@tailwind utilities;


#NOTE: src/dist/output.css

<link rel="stylesheet" type="text/css" herf="/dist/output.css">

```


# For running the tailwind css and frontend file follow this

```text
Command: npm install -D live-server

Setup the package.json file after installation of the tailwind.css

    {
      "scripts": {
        "dev": "tailwindcss -i ./styles.css -o ./dist/output.css --watch",
        "serve": "live-server --port=3000",
        "start": "npm-run-all --parallel dev serve"
      }
    }

Start server: npm start

```

















