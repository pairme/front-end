import io from "socket.io-client";

const url = process.env.NODE_ENV === "production" ? `https://herokucarlo.herokuapp.com/` : `http://localhost:5000`

const socket = io.connect(url);
console.log(`url ${url}`)
export default socket;
