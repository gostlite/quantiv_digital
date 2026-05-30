import { useMemo, useState } from 'react'
import logo from './assets/quantiv_digital_logo.jpeg'
import movvaRoles from './assets/Frame 2147227049.png'
import movvaRequest from './assets/phone-steps.png'
import './App.css'

const deliveryOptions = [
  { id: 'bike', label: 'Bike', eta: '35-55 min', base: 2400, tone: 'fast' },
  { id: 'car', label: 'Car', eta: '1-2 hrs', base: 4200, tone: 'secure' },
  { id: 'van', label: 'Van', eta: 'Same day', base: 8200, tone: 'bulk' },
]

const businessGoals = [
  ['01', 'Launch & Validate', 'Attract early users and prove Movva fits real delivery needs.'],
  ['02', 'Grow the User Base', 'Use partnerships, referrals, and targeted campaigns to expand reach.'],
  ['03', 'Build the Brand', 'Position Quantiv Digital as a trusted, innovative technology company.'],
  ['04', 'Iterate Fast', 'Turn user feedback into sharper products and better operations.'],
]

function App() {
  const [activeOption, setActiveOption] = useState(deliveryOptions[0])
  const [distance, setDistance] = useState(8)

  const quote = useMemo(() => {
    const distanceCost = distance * (activeOption.id === 'van' ? 650 : 320)
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(activeOption.base + distanceCost)
  }, [activeOption, distance])

  return (
    <main>
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Quantiv Digital home">
          <img src={logo} alt="" />
          <span>
            <strong>Quantiv Digital</strong>
            <small>Innovation & technology</small>
          </span>
        </a>
        <nav>
          <a href="https://movva.quantivdigital.com" target="_blank" rel="noreferrer">
            Movva
          </a>
          <a href="#goals">Goals</a>
          <a href="#partner">Partner</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Flagship product: Movva</span>
          <h1>Delivery technology for everyday movement.</h1>
          <p>
            Quantiv Digital builds purposeful products that remove friction from
            daily operations. Movva connects people and businesses to dependable
            delivery with visibility, control, and confidence.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#quote">Plan a delivery</a>
            <a className="button secondary" href="mailto:hello@quantivdigital.com">Talk to us</a>
          </div>
        </div>

        <section className="delivery-panel" id="quote" aria-label="Delivery estimate">
          <div className="panel-header">
            <span>Movva request</span>
            <strong>Live estimate</strong>
          </div>

          <div className="route-map" aria-hidden="true">
            <div className="pin pickup">A</div>
            <div className="route-line"></div>
            <div className="pin dropoff">B</div>
          </div>

          <div className="field-grid">
            <label>
              Pickup
              <span>Lekki Phase 1</span>
            </label>
            <label>
              Drop-off
              <span>Ikeja GRA</span>
            </label>
          </div>

          <div className="range-control">
            <div>
              <span>Distance</span>
              <strong>{distance} km</strong>
            </div>
            <input
              type="range"
              min="2"
              max="30"
              value={distance}
              onChange={(event) => setDistance(Number(event.target.value))}
              aria-label="Delivery distance"
            />
          </div>

          <div className="option-list" role="list" aria-label="Delivery vehicle options">
            {deliveryOptions.map((option) => (
              <button
                className={option.id === activeOption.id ? 'option active' : 'option'}
                key={option.id}
                type="button"
                onClick={() => setActiveOption(option)}
              >
                <span>{option.label}</span>
                <small>{option.eta}</small>
              </button>
            ))}
          </div>

          <div className="quote-total">
            <span>Estimated fare</span>
            <strong>{quote}</strong>
          </div>
        </section>
      </section>

      <section className="metrics-band" aria-label="Company priorities">
        <div>
          <strong>6 months</strong>
          <span>to product-market fit</span>
        </div>
        <div>
          <strong>SMEs</strong>
          <span>individuals and local operators</span>
        </div>
        <div>
          <strong>Trust</strong>
          <span>trackable, reliable delivery</span>
        </div>
      </section>

      <section className="split-section" id="movva">
        <div className="movva-copy">
          <div>
            <span className="eyebrow">Why Movva</span>
            <h2>Built for markets where delivery still feels fragmented.</h2>
          </div>
          <div className="body-copy">
            <p>
              Movva began as ParcelPal, an early concept for last-mile logistics.
              The product evolved into a sharper brand focused on movement,
              momentum, and practical reliability.
            </p>
            <p>
              It gives senders and recipients a clearer way to coordinate parcels,
              goods, and everyday shipments, whether one package is moving across
              town or a business is managing recurring deliveries.
            </p>
          </div>
        </div>
        <a
          className="product-showcase"
          href="https://movva.quantivdigital.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the Movva product page"
        >
          <img className="product-phone primary-phone" src={movvaRequest} alt="Movva request screen" />
          <img className="product-phone secondary-phone" src={movvaRoles} alt="Movva user role selection screen" />
          <span>View Movva product</span>
        </a>
      </section>

      <section className="goals-section" id="goals">
        <div className="section-heading">
          <span className="eyebrow">Business goals</span>
          <h2>Early-stage focus, built around learning fast.</h2>
        </div>
        <div className="goal-grid">
          {businessGoals.map(([number, title, description]) => (
            <article className="goal-card" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-section" id="partner">
        <div>
          <span className="eyebrow">Partnerships</span>
          <h2>Let’s move useful technology from idea to daily habit.</h2>
        </div>
        <div className="contact-actions">
          <a className="button secondary" href="tel:+2349079472099">
            +234 907 947 2099
          </a>
          <a className="button primary" href="mailto:jjohnadeleke91@gmail.com">
            jjohnadeleke91@gmail.com
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
