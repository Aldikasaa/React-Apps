import React from "react";
import Navbar from "./src/components/Navbar"
import Card from "./src/components/Cards"
import data from "./src/data"



export default function App() {
    // <Hero />
const cards = data.map(item => {
return (
    <Card 
        key={item.id}
        item={item}
    />
)
})        

return (
<div>
    <Navbar />
    {cards}
</div>
)
}
