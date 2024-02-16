
const today =new Date();

const date=()=>{
  const year = (today.getFullYear()+'年');
  const month = ((today.getMonth()+1)+'月');
  const day = (today.getDate()+'日');
  console.log(year + month + day);
};

date();
