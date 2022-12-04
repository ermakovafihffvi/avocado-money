import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { testSelector } from '../../redux/testReducer/testSelector';
import { testInitiate, testPost, testUpdate, testDelete } from '../../redux/testReducer/actions';
import {loadingTestSelector} from "../../redux/testReducer/testSelector";
import axios from 'axios';
import { breakpoints } from '@mui/system';



function Test() {
    const dispatch = useDispatch();
    const testsArr = useSelector(testSelector);
    const loading = useSelector(loadingTestSelector);

    const [categorieID, setCat] = useState(0);
    const [desc, setDesc] = useState('');
    const [userId, setUserId] = useState(0);
    const [sum, setSum] = useState(0);

    const handleInput = (field, e) => {
        switch(field){
            case "category_id":
                setCat(e.target.value);
                break;
            case "desc":
                setDesc(e.target.value);
                break;
            case "user_id":
                setUserId(e.target.value);
                break;
            case "sum":
                setSum(e.target.value);
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({"category_id": categorieID, "desc": desc, "user_id": userId, "sum": sum});
        dispatch(testPost({"category_id": categorieID, "desc": desc, "user_id": userId, "sum": sum}));
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        console.log({"id": e.target.id, "category_id": categorieID, "desc": desc, "user_id": userId, "sum": sum});
        dispatch(testUpdate({"id": e.target.id, "category_id": categorieID, "desc": desc, "user_id": userId, "sum": sum}));
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(testDelete({"id": id}));
    }

    useEffect(()=>{
        //dispatch(testInitiate());
    }, [])

    /*const fetchCategories = async () => {
        await axios.get(`http://laravelreact/api/category_exp`).then(({data}) => {
            setCategories(data);
        });
    }*/

    console.log(testsArr);
    console.log(loading);
    if(loading){
        return (
            <>        
            Loading
            </>
        );
    } else if(testsArr == "ok") {
        return (
            <>
            Data posted
            </>
        );
    } else {
        return (
            <>    
                <h1>not loading</h1>    

                <form onSubmit={handleSubmit}>
                    <label> category_id: 
                        <input type="category_id" onChange={(e)=>handleInput('category_id',e)} />
                    </label>
                    
                    <label> desc: 
                        <input type="desc" onChange={(e)=>handleInput('desc',e)} />
                    </label>

                    <label> user_id: 
                        <input type="user_id" onChange={(e)=>handleInput('user_id',e)} />
                    </label>
                    
                    <label> sum: 
                        <input type="sum" onChange={(e)=>handleInput('sum',e)} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>

                <form onSubmit={handleUpdateSubmit} id="2" key="2">
                    <label> category_id: 
                        <input type="category_id" onChange={(e)=>handleInput('category_id',e)} />
                    </label>
                    
                    <label> desc: 
                        <input type="desc" onChange={(e)=>handleInput('desc',e)} />
                    </label>

                    <label> user_id: 
                        <input type="user_id" onChange={(e)=>handleInput('user_id',e)} />
                    </label>
                    
                    <label> sum: 
                        <input type="sum" onChange={(e)=>handleInput('sum',e)} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>

                <div>
                    <p id="3">id=3</p>
                    <button onClick={(e)=>handleDelete(e, 3)}>delete</button>
                </div>


                <label> category_id: 
                    <select type="category_id" onChange={(e)=>props.handleInput('category_id',e)}>
                        {!hasData 
                            ? <option selected="selected">Выберите категорию</option>
                            : <option selected="selected" 
                                value={dataObj.category_id}>
                                    {(props.catList.filter(category => category.id == dataObj.category_id))[0].title}
                                </option> 
                        }
                        {props.catList.map((category) => (
                            <option value={category.id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </label>

                {props.type == "expenses"
                    ?
                        <label> category_id: 
                            <select type="category_id" onChange={(e)=>props.handleInput('category_id',e)}>
                                {!hasData 
                                    ? <option selected="selected">Выберите категорию</option>
                                    : <option selected="selected" 
                                        value={dataObj.category_id}>
                                            {(props.catList.filter(category => category.id == dataObj.category_id))[0].title}
                                        </option> 
                                }
                                {props.catList.map((category) => (
                                    <option value={category.id}>
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                        </label>
                    : <></>
                }

                
                <label> desc: 
                    {hasData 
                        ? <input type="desc" onChange={(e)=>props.handleInput('desc',e)} defaultValue={dataObj.desc}/> 
                        : <input type="desc" onChange={(e)=>props.handleInput('desc',e)} /> 
                    }
                </label>
                
                <label> sum: 
                    {hasData 
                        ? <input type="sum" onChange={(e)=>props.handleInput('sum',e)} defaultValue={dataObj.sum}/> 
                        : <input type="sum" onChange={(e)=>props.handleInput('sum',e)} /> 
                    }
                </label>

                <input type="submit" value="Submit" />
                
            </>
        );
    }
}


export default Test;