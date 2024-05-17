export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] Hola @${m.sender.split`@`[0]},¡Qué onda, rey! 👑 Este es un bot para grupos de WhatsApp. 📲 Cualquier cosa, comunícate con mi dueño 📞 si deseas adquirir uno: +52 56 2576 8269. O entra al grupo de WhatsApp aquí: 👉 [https://chat.whatsapp.com/Ig0BhML7t4G8vmnmPrCKNb]. 🚀`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
