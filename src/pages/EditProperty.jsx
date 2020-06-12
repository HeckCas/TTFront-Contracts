import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import Map from '../components/Map'
import Web3 from 'web3'
import swal from 'sweetalert';
// import Houses from `../${process.env.REACT_APP_ABIS_PROD}/Houses.json`
import '../styles/New.css'
const GmpsApiKey = process.env.REACT_APP_GMAPS_API_KEY
const ApiUrl = process.env.REACT_APP_APIURL

export default function EditProperty(props) {
    const [ownerName, setOwnerName] = useState('')
    const [ownerWallet, setOwnerWallet] = useState('')
    const [ownerCurp, setOwnerCurp] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [deedNumber, setDeedNumber] = useState('')
    const [notaria, setNotaria] = useState('')
    const [walletNotario, setWalletNotario] = useState('')
    const [numSolicitud, setNumSolicitud] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [calle, setCalle] = useState('')
    const [numExterior, setNumExterior] = useState('')
    const [numInterior, setNumInterior] = useState('')
    const [colonia, setColonia] = useState('')
    const [estado, setEstado] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [codigoPosal, setCodigoPosal] = useState('')
    const [idBc, setBC] = useState('')
    const [account, setAccount] = useState('')
    const [ethBalance, setEthBalance] = useState('')
    const [houses, setHouses] = useState('')
    const [statehash, setHash] = useState('')
    const [counter, setCounter] = useState('')
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        getProperty(props.id)
        
        return () => {
            console.log('remove from EditProperty')
        }
    }, [])
    
    const getProperty = async(id) => {
        let res = await axios.get(`${ApiUrl}/properties/${id}`)
        console.log('%c Data', 'color: #b0f566', res.data)
        if (res && res.data) {
            if(res.data.ownerName){
                setOwnerName(res.data.ownerName)
            }
            if(res.data.ownerWallet){
                setOwnerWallet(res.data.ownerWallet)
            }
            if(res.data.ownerCurp){
                setOwnerCurp(res.data.ownerCurp)
            }
            if(res.data.birthdate){
                setBirthdate(res.data.birthdate.substr(0,10))
            }
            if(res.data.deedNumber){
                setDeedNumber(res.data.deedNumber)
            }
            if(res.data.notaria){
                setNotaria(res.data.notaria)
            }
            if(res.data.walletNotario){
                setWalletNotario(res.data.walletNotario)
            }
            if(res.data.numSolicitud){
                setNumSolicitud(res.data.numSolicitud)
            }
            if(res.data.ubicacion){
                setUbicacion(res.data.ubicacion)
            }
            if(res.data.calle){
                setCalle(res.data.calle)
            }
            if(res.data.numExterior){
                setNumExterior(res.data.numExterior)
            }
            if(res.data.numInterior){
                setNumInterior(res.data.numInterior)
            }
            if(res.data.colonia){
                setColonia(res.data.colonia)
            }
            if(res.data.estado){
                setEstado(res.data.estado)
            }
            if(res.data.municipio){
                setMunicipio(res.data.municipio)
            }
            if(res.data.codigoPosal){
                setCodigoPosal(res.data.codigoPosal)
            }
            if(res.data.idBc){
                setBC(res.data.idBc)
            }
        }
        setLoading(false)
    }
    const onSubmit = e => {
        e.preventDefault()
        const dataToUpdate = {
            "ownerName": ownerName,
            "ownerWallet": ownerWallet,
            "ownerCurp": ownerCurp,
            "birthdate": birthdate,
            "deedNumber": deedNumber,
            "notaria": notaria,
            "walletNotario": walletNotario,
            "numSolicitud": numSolicitud,
            "ubicacion": ubicacion,
            "calle": calle,
            "numExterior": numExterior,
            "numInterior": numInterior,
            "colonia": colonia,
            "estado": estado,
            "municipio": municipio,
            "codigoPosal": codigoPosal,
            "idBc": idBc
        }

        editProperty(dataToUpdate)
    }
    const handleLocationValues = (data) => {
        const {address, street, exterior, neighborhood, state, municipio, cp} = data
        setUbicacion(address)
        setCalle(street)
        setNumExterior(exterior)
        setColonia(neighborhood)
        setEstado(state)
        setMunicipio(municipio)
        setCodigoPosal(cp)
    }
    const editProperty = async(data) => {
        let res = await axios.put(`${ApiUrl}/properties/${props.id}`, data)
        if(res.data.success){
            history.push("/dashboard");
        }else{
            console.error(res)
        }
    }
    return (
        <>
        {
            loading ? 
            <div className="container">
                <p>Cargando...</p>
            </div> : 
            <div className="container">
                <div className="row title_register">
                    <h3>Registro de Nuevo Inmueble</h3>
                    <hr className="divider__Style"/>
                </div>
                <div className="row form__container">
                    <form onSubmit={onSubmit}>
                        <div className="row ownerData__container">
                            <div className="col-sm-12 col-md-6">
                                <input 
                                type="text" 
                                className="form-control form-control-lg ownerData-input" 
                                id="owner-name" 
                                aria-describedby="emailHelp" 
                                placeholder="Nombre del Propietario"
                                value={ownerName}
                                onChange={e => setOwnerName(e.target.value)}
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <input 
                                type="text" 
                                className="form-control form-control-lg ownerData-input" 
                                id="owner-wallet" 
                                placeholder="Wallet del Propietario"
                                value={ownerWallet}
                                onChange={e => setOwnerWallet(e.target.value)}
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <input 
                                type="text" 
                                className="form-control form-control-lg ownerData-input" 
                                id="owner-name" 
                                aria-describedby="emailHelp" 
                                placeholder="CURP del Propietario"
                                value={ownerCurp}
                                onChange={e => setOwnerCurp(e.target.value)}
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <input 
                                type="date" 
                                className="form-control form-control-lg ownerData-input" 
                                id="owner-wallet" 
                                placeholder="Fecha de Nacimiento del Propietario"
                                value={birthdate}
                                onChange={e => {
                                    console.log(e.target.value)
                                    setBirthdate(e.target.value)
                                }}
                                />
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <input 
                                type="text" 
                                className="form-control form-control-lg ownerData-input" 
                                id="owner-name" 
                                aria-describedby="emailHelp" 
                                placeholder="Número de Escitura"
                                value={deedNumber}
                                onChange={e => setDeedNumber(e.target.value)}
                                />
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <input 
                                type="text" 
                                className="form-control form-control-lg ownerData-input" 
                                id="owner-name" 
                                aria-describedby="emailHelp" 
                                placeholder="Notaría"
                                value={notaria}
                                onChange={e => setNotaria(e.target.value)}
                                />
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <input 
                                type="text" 
                                className="form-control form-control-lg ownerData-input" 
                                id="owner-name" 
                                aria-describedby="emailHelp" 
                                placeholder="Wallet de Notario"
                                value={walletNotario}
                                onChange={e => setWalletNotario(e.target.value)}
                                />
                            </div>
                            <div className="col-sm-12">
                                <input 
                                type="text" 
                                className="form-control form-control-lg ownerData-input__large" 
                                id="owner-wallet" 
                                placeholder="No. de solicitu de trámite"
                                value={numSolicitud}
                                onChange={e => setNumSolicitud(e.target.value)}
                                />
                            </div>
                            <div className="col-sm-12">
                                <input 
                                type="text" 
                                className="form-control form-control-lg ownerData-input__large" 
                                id="owner-wallet" 
                                placeholder="Ubicación"
                                value={ubicacion}
                                onChange={e => setUbicacion(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                            <Map
                                google={props.google}
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&&libraries=geometry,drawing,places&key=${GmpsApiKey}`}
                                containerElement={<div style={{height: '400px'}} />}
                                mapElement={<div style={{height: '100%'}} />}
                                loadingElement={<p>Cargando</p>}
                                getUbicacion={handleLocationValues}
                            />
                            </div>
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg ownerData-input" 
                                        id="owner-wallet" 
                                        placeholder="Calle"
                                        value={calle}
                                        onChange={e => setCalle(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg ownerData-input" 
                                        id="owner-wallet" 
                                        placeholder="Num Exterior"
                                        value={numExterior}
                                        onChange={e => setNumExterior(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg ownerData-input" 
                                        id="owner-wallet" 
                                        placeholder="Num Interior"
                                        value={numInterior}
                                        onChange={e => setNumInterior(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg ownerData-input" 
                                        id="owner-wallet" 
                                        placeholder="Colonia"
                                        value={colonia}
                                        onChange={e => setColonia(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg ownerData-input" 
                                        id="owner-wallet" 
                                        placeholder="Estado"
                                        value={estado}
                                        onChange={e => setEstado(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg ownerData-input" 
                                        id="owner-wallet" 
                                        placeholder="Municipio"
                                        value={municipio}
                                        onChange={e => setMunicipio(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg ownerData-input" 
                                        id="owner-wallet" 
                                        placeholder="C.P."
                                        value={codigoPosal}
                                        onChange={e => setCodigoPosal(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-right mt-3">
                                <button type="submit" className="btn btn-primary text-right">Editar Inmueble</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        }
        </>
    )
    
}
