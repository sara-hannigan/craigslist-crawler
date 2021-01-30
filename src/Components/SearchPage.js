function SearchPage () {
    return (
    <div class="container align-items-center">
        <div class="column align-items-center">
            <div class="col-xl">
                <h1>Craiglist Crawler</h1>
            </div>
            <div class="col-xl">
                <h2>Start with a zip code and a distance</h2>
            </div>
            <div class="col-xl">
                <input name="zipcode" type="text" placeholder="Zip Code" />
                <input name="distance" type="text" placeholder="Distance" />
            </div>
        </div>
    </div> 
    );
}

export default SearchPage;