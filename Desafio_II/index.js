const { default: UseManager } = require("./managers/UserManager");

const manager = new UseManager("./files/Usuarios.json");

const env = async () => {
  const usuarios = await manager.getUsers();
  console.log(usuarios);
};
env();
