import io from "socket.io-client"
//http://localhost:8080/

const socket = io("https://webrtcdemo-chop.onrender.com",
    {
        autoConnect:false,
         auth: { key: "super-secret-123" }
    }
)


export default  socket
