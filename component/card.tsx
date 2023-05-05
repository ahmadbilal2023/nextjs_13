// what is component
// component k nam ka pehla letter capital hona chahea
// component aik function ha
// component html ka parent element return kerta ha
// component re-usable ha
// component k ander javascript/typescript kay ander html or css b likh skty han
// component m html k ander javascript/ typescript b likh skty han

 const Card = ()=>{
    let a:string = "How are you?";
    let b:string = "what are you doing"
    let c:string = "Whats about your job?";
    let d:string = "for now a day where are you live?";
    return (
    <div>
        <h4>{a}</h4>
        <h4>{b}</h4>
        <h4>{c}</h4>
        <h4>{d}</h4>
        <h4>{d}</h4>
    </div>
    );
};
export default Card;

