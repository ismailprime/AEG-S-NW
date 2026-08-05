module.exports=
async interaction=>{


if(
interaction.customId==="ticket_category"
){


let category =
interaction.values[0];



require("../systems/ticket")
(interaction,category);



}



}
