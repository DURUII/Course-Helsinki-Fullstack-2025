const Filter = ({ newSearchKey, handleSearchKeyChange }) => {
    return (
        <div>
            filter shown with <input value={newSearchKey} onChange={handleSearchKeyChange} />
        </div>
    )
}

export default Filter