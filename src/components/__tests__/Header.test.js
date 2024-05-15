import Header from "../Header"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

test("should load header",()=>{
render(
    <BrowserRouter>
<Header/>
</BrowserRouter>

)
})