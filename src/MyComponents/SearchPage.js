import React from "react";
import axios from "axios";
import {useState} from "react";
import {AnswerTableContent} from "./AnswerTableContent";


export const SearchPage = () => {
    const [question, setQuestion] = useState("")
    const [answers, setAnswers] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const [detectedLang, setDetectedLang] = useState("")
    const [cacheHit, setCacheHit] = useState("")
    const [checked, setChecked] = React.useState(false);

    const clickSearchButton = (e) => {
        e.preventDefault();
        setIsSearching(true)
        axios.post(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/get-answers", {
            'question': question,
            'answer_in_english': checked.toString()
        }).then((res) => {
            console.log(res.data.responses)
            setAnswers(res.data.responses)
            setDetectedLang(res.data.source_lang)
            setIsSearching(false)
            setCacheHit(res.data.cache_hit)
        })
    }


    return (<>
            <br/>
            <br/>
            <br/>
            <div className="mx-5">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => {
                        setChecked(!checked);
                    }}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Get Results in English
                    </label>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless"
                                           placeholder="Search Question" onChange={(e) => {
                                        setQuestion(e.target.value)
                                    }}/>
                                </div>
                                <div className="col-auto">
                                    {!isSearching ?
                                        <button className="btn btn-lg btn-success" type="submit"
                                                onClick={clickSearchButton}>Search</button>
                                        : <button className="btn btn-lg btn-success" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status"
                                                  aria-hidden="true"/>
                                            Searching...
                                        </button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <p>Total Answers Found: {answers.length}</p>
                <p>Detected Language: {detectedLang}</p>
                <p>{cacheHit}</p>
                <p>Retrieved from: {!cacheHit? "Model":"Cache"}</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Retrieved Answers</th>
                    </tr>
                    </thead>
                    <tbody>
                    {answers.map((text, index) => {
                        return <>
                            <AnswerTableContent answer={text}/>
                        </>
                    })}
                    </tbody>
                </table>
                <br/>
                <br/>
                <br/>
            </div>
        </>
    )
}
