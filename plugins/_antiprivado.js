export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[this.user.jid] || {};
//INICIO lineas por Kurt18
const fechaActual = new Date();
const fechaActualNum = Date.UTC(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    fechaActual.getDate()
);
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";

let horaActualNum = Date.now();
const intervaloEsperado = 12 * 60 * 60 * 1000; // 1 hora en milisegundos
let tiempoTranscurrido = horaActualNum - user.fechaUltimoMsjInbox;

console.log(`user.fechaUltimoMsjInbox >${user.fechaUltimoMsjInbox}<`); //Luego comentar
console.log(`horaActualNum >${horaActualNum}<`); //Luego comentar
console.log(`tiempoTranscurrido >${tiempoTranscurrido}<`); //Luego comentar

if (tiempoTranscurrido >= intervaloEsperado) {
   await m.reply(`*🤖Hola @${m.sender.split`@`[0]}, esta prohibido utilizar el bot en privado😼*\n\n> Pero si quieres comprarlo o tienes alguna otra consulta solo responde a este mensaje y el bot te atendera\n\n🤖${wm}🤖`, false, {mentions: [m.sender]});
    user.fechaUltimoMsjInbox = horaActualNum;
    return;
}
//user.fechaUltimoMsjInbox = 0; //test (luego eliminar)
//FIN lineas por Kurt18

  return !1;
                  }
