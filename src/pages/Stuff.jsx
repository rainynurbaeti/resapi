import React, { useEffect, useState } from "react";
import Case from "../components/Case";
import axios from "axios";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

export default function Stuff() {
    const [stuffs, setStuff] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getStuff();
    }, []);

    function getStuff() {
        axios.get('http://localhost:8000/stuffs', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            setStuff(res.data.data);
        })
        .catch(err => {
            console.log(err);
            if (err.response.status === 401) {
                navigate('/login?message=' + encodeURIComponent('Anda belum login'));
            }
        });
    }

    const headers = [
        "#",
        "Name",
        "Category",
        "Total Available",
        "Total Defect",
        
        

    ];
    

    const endpointModal = {
        "data_detail" : "http://localhost:8000/stuff/show/{id}",
        "delete" : "http://localhost:8000/stuff/delete{id}",
        "update" : "http://localhost:8000/stuff/update/{id}",
        "store"  : "http://localhost:8000/stuff/store",
    }

    const columnIdentitasDelete = 'name' ;

    const inputData = {
        "name" : {
            "tag": "input",
            "type": "text",
            "option": null
        },

        "category" : {
            "tag": "select",
            "type": "select",
            "option": ["PPLG", "HTL", "Teknisi/Sarpras"]
        },

    }

    const title ='Stuff'
     
    const button = [
        "create",
        "trash",
        "edit",
        "delete"
    ]

    const toColumn ={
        "name" : null,
        "category" :null,
        "stuff_stock" : "total_available",
        "stuff_stock*" : "total_defec"
    }

    return (
        <Case>
            <div className="mt-20">
                <h1 className="text-center text-white">Data Stuffs</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-20 py-10">
                <Table headers={headers} data={stuffs}  endpoint={endpointModal} identitasColumn={columnIdentitasDelete} 
                inputData={inputData} titleModal={title} opsiButton={button} columnForTd={toColumn}></Table>
                </div>
            </div>
        </Case>
    );
}
