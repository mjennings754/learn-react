export default function SideBar(props) {
    const {handleToggleModal, data} = props 
    return (
        <>
        <div className="sidebar">
            <div className="bgOverlay" onClick={handleToggleModal}></div>
            <div className="sidebarContents">
            <h2>{data?.title}</h2>
            <div>
                <p>{data?.explanation}</p>
                <p>text about image</p>
            </div>
            <button onClick={handleToggleModal}>Right</button>
            </div>
        </div>
        </>
    )
}