import config from './config';
import app from './http';
import p2p, { initConnection, connectToPeers } from './p2p/index';
const PORT = 3001;
app.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));


p2p.on('connection', ws => initConnection(ws));
console.info(`P2P server has been started on port: ${config.p2p.port} (${config.env})`);

connectToPeers(config.p2p.peers);
