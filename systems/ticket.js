const {
Channels,
PermissionsBitField
}=require("discord.js");


module.exports=
async(interaction,type)=>{


const guild=
interaction.guild;


const exists =
guild.channels.cache.find(
c=>
c.name.includes(
interaction.user.username
)
);


if(exists){

return interaction.reply({

content:
"❌ Zaten açık ticketin var.",

ephemeral:true

});

}



const channel =
await guild.channels.create({

name:
`ticket-${interaction.user.username}`,

type:0,


permissionOverwrites:[

{
id:guild.id,

deny:[
PermissionsBitField.Flags.ViewChannel
]

},


{

id:interaction.user.id,

allow:[
PermissionsBitField.Flags.ViewChannel,
PermissionsBitField.Flags.SendMessages
]

}

]


});




channel.send({

content:
`
🎫 **AEGİS NW Ticket**

Kategori:
${type}

Yetkililer birazdan ilgilenecek.

`

});


interaction.reply({

content:
`✅ Ticket oluşturuldu: ${channel}`,

ephemeral:true

});


}
