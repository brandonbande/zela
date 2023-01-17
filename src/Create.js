import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Admin');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            // history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="app">

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Blog title:</label>
                </div>
                <div>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Blog body:</label>
                </div>
                <div>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label>Blog author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;
