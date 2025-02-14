import "./Home.css";
import Nav from "./Nav";

export default function Home() {
	const company_year = 1988;
	const cfc = new Date().getFullYear() - 1981;
	const tel = "+41 79 611 17 93";
	const email = "rene.margueron@bluewin.ch";
	const site = "rmargueron.ch";

	return (
		<>
			<div className="background_image" />
			<Nav />
			<main>
				<div>
					<h3>Expertise</h3>
					<div>
						<p>
							L'entreprise Margueron a été créée en{" "}
							<span>{company_year}</span> par René Margueron,
							titulaire d'un certificat fédéral de capacité depuis
							plus de {cfc} ans.
						</p>

						<p>Nos spécialités sont :</p>

						<ul>
							<li>
								Le remplacement de fenêtres par des fenêtres en
								PVC
							</li>
							<li>
								La fourniture et pose de portes bois ou
								bois-aluminium
							</li>
							<li>
								La fourniture et pose de volets en bois ou en
								aluminium
							</li>
							<li>
								La pose de parquets flottant en bois massif ou
								stratifié
							</li>
							<li>
								La fourniture et la pose de terrasses en bois
							</li>
						</ul>

						<p>Nos qualités sont :</p>

						<ul>
							<li>
								La pose sur mesure{" "}
								<img
									src="/triangle.png"
									className="icon invert"
								/>
							</li>
							<li>
								Une fabrication et pose Suisse{" "}
								<img src="/swissflag.png" className="icon" />
							</li>
							<li>
								Un travail garanti et un produit de première
								qualtié
								<img src="/tick.png" className="icon invert" />
							</li>
						</ul>
					</div>
					<div>
						<h3>Contact</h3>

						<p>Je me déplace en Suisse romande sur Neuchâtel et les cantons voisin (Vaud, Jura, Berne, Fribourg)</p>

						<p>
							René Margueron
							<br />
							Rue du Jordil 4B
							<br />
							2022 - Bevaix
							<br />
							<a href={`tel:${tel.replace(" ", "")}`}>{tel}</a>
						</p>

						<p>
							<a href={`mailto:${email}`}>{email}</a>
						</p>
						<p>
							<a href={`https://${site}`}>{site}</a>
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
