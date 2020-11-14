export const signupUser = async (name, email, password) => {
    try {
        const response = await fetch("api/v1/users/signup", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        if (response.ok) {
            const results = await response.json();
            return results;
        } else {
            const message = await response.json();
            return message;
        }
    } catch (err) {
        throw new Error(err);
    }
}

// Login User
export const signinUser = async (email, password) => {
    try {
        const response = await fetch("api/v1/users/signin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const message = await response.json();
            return message;
        }
    } catch (err) {
        throw new Error(err);
    }
}