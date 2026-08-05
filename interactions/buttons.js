module.exports=
async(interaction)=>{


if(
interaction.customId==="stats"
){

interaction.reply({

ephemeral:true,

content:
`
📊 AEGİS NW İSTATİSTİK

👥 Üye:
${interaction.guild.memberCount}

🤖 Bot:
Aktif

`

});


}



if(
interaction.customId==="ticket"
){

interaction.reply({

ephemeral:true,

content:
"🎫 Ticket paneli hazırlanıyor."

});


}



}
