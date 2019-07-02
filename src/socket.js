import io from "socket.io-client";

const url = process.env.NODE_ENV === "development" ? `http://localhost:5000` : `https://herokucarlo.herokuapp.com/`

const socket = io.connect(url);
console.log(`url ${url}`)
export default socket;
