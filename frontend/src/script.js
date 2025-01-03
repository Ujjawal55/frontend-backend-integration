const getRequest = {
    method: "GET",
    credentials: "include",
    headers: {
        "Accept" : "application/json"
    }
}


async function fetchData() {

    try {
        url = "http://localhost:3000/todo";
        const response = await fetch(url, getRequest);

        if (!response.ok) {
            window.location.href="http://localhost:3000/error";
            const errorDiv = document.createElement("div");
        }


    } catch(error) {
        console.error("error: ", error)
    }
}



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
                displayTodo(data);
            } catch(error) {
                console.error("error", error);
            }

        });
    }
});
