import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { deleteRoomById, searchRoom } from "../service/roomService";
import { getAllType } from "../service/typeService";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListFacilities() {
    const [roomList, setRoomList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    const searchNameRef = useRef();
    const searchTypeRef = useRef();
    const [isSearch, setIsSearch] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [deleteRoom, setDeleteRoom] = useState(null);
    const [show, setShow] = useState(false);
    const [visibleRooms, setVisibleRooms] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            let name = searchNameRef.current.value;
            let type = searchTypeRef.current.value;
            const data = await searchRoom(name, type);
            setRoomList(data);
        }
        const fetchType = async () => {
            setTypeList(await getAllType());
        }
        fetchData();
        fetchType();
    }, [isSearch]);

    const handleSearch = async () => {
        setIsSearch((prevState) => !prevState);
    }

    const handleRoomClick = (room) => {
        setSelectedRoom(room);
    }

    const handleCloseModal = () => {
        setSelectedRoom(null);
    }

    const handleDelete = async () => {
        await deleteRoomById(deleteRoom.id);
        setIsSearch((prevState) => !prevState);
        setDeleteRoom(null);
        handleCloseModalDelete();
        handleCloseModal();
        toast.success("Delete room successfully!");
    }

    const handleCloseModalDelete = () => {
        setShow(preState => !preState);
    }

    const handleShowModalDelete = (room) => {
        setShow(prevState => !prevState);
        setDeleteRoom(room);
    }

    const handleViewMore = () => {
        setVisibleRooms((prev) => prev + 6);
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center">Room List</h1>
                <Link to={"/home/add"} className="btn btn-primary btn-add-room d-block mx-auto" style={{ width: "fit-content" }}>
                    Add new room
                </Link>
                <div className="search-form">
                    <input type="text" ref={searchNameRef} name="searchName" placeholder="Search by name" />
                    <select ref={searchTypeRef}>
                        <option value="">---All---</option>
                        {typeList.map((type) => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    <button onClick={handleSearch} className="btn btn-primary" type="button">Search</button>
                </div>
                <div className="row">
                    {roomList.slice(0, visibleRooms).map((room) => (
                        <div className="col-4" key={room.id}>
                            <div className="card" onClick={() => handleRoomClick(room)}>
                                <img src={room.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{room.name}</h5>
                                    <p className="card-text">{room.size} m²</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleRooms < roomList.length && (
                    <div className="text-center mt-3">
                        <button className="btn btn-primary" onClick={handleViewMore}>View More</button>
                    </div>
                )}
            </div>
            {selectedRoom && (
                <div className="modal fade show" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <img src={selectedRoom.image} className="img-fluid" alt={selectedRoom.name} />
                                <p>Size: {selectedRoom.size} m²</p>
                                <p>Price: {selectedRoom.price}</p>
                                <p>Max Guests: {selectedRoom.maxGuest}</p>
                                <p>Type of room: {selectedRoom.type.name}</p>
                            </div>
                            <div className="modal-footer">
                                <Link to={`/home/edit/${selectedRoom.id}`} className="btn btn-primary">Edit</Link>
                                <button type="button" className="btn btn-danger" onClick={() => handleShowModalDelete(selectedRoom)}>Delete</button>
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Modal show={show} onHide={handleCloseModalDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this room?</Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModalDelete}>Close</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ListFacilities;