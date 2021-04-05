export default function () {
    return <div>
        <h1>Afrekenen</h1>
              <div>
                  <label>Naam</label>
                  <label>Aantal</label>
                  <label>Totaal</label>
                  <hr />
              </div>
        <div>
        <h1>Jouw gegevens</h1>
        <form>
            <p>
               Naam: <input type="text" />
            </p>
            <p>
               Emailadres: <input type="email" />
            </p>
            <p>
               Telefoonnummer: <input type="tel" />
            </p>
        </form>
        </div>
    </div>
}