import { useContext } from 'react';
import Carta from './Carta';
import { Lang } from '../context/Lang.context';

const Terms = () => {
	const { lang } = useContext(Lang);

	return (
		<Carta>
			{lang === 'es' ? (
				<>
					<h1>Términos y Condiciones</h1>
					<h2>1. Introducción</h2>
					<p>
						Bienvenido a LAFONTANASANTJOAN.ES (el "Sitio Web"). Al acceder o
						utilizar el Sitio Web, usted (el "Usuario") acepta estar obligado
						por estos Términos y Condiciones.
					</p>
					<h2>2. Aceptación de Términos</h2>
					<p>
						Al utilizar el Sitio Web, usted reconoce que ha leído, entendido y
						acepta estar obligado por estos Términos y Condiciones.
					</p>
					<h2>3. Conducta del Usuario</h2>
					<p>Usted se compromete a no:</p>
					<ul>
						<li>
							Utilizar el Sitio Web para cualquier actividad ilegal o
							perjudicial
						</li>
						<li>
							Publicar, subir o transmitir cualquier contenido que sea
							difamatorio, obsceno o invasivo de la privacidad de otra persona
						</li>
						<li>Interferir con o disrumpir la operación del Sitio Web</li>
						<li>Intentar acceder o manipular el código fuente del Sitio Web</li>
					</ul>
					<h2>4. Propiedad Intelectual</h2>
					<p>
						LAFONTANASANTJOAN.ES posee todos los derechos, título y interés en y
						a respecto del Sitio Web, incluyendo pero no limitándose a los
						derechos de propiedad intelectual como los derechos de autor, marcas
						registradas y patentes.
					</p>
					<p>Usted se compromete a no:</p>
					<ul>
						<li>
							Copiar, reproducir o distribuir cualquier contenido del Sitio Web
							sin permiso
						</li>
						<li>
							Utilizar cualquier marca, logotipo o símbolo de
							LAFONTANASANTJOAN.ES sin permiso
						</li>
					</ul>
					<h2>5. Desacuerdo de Garantías</h2>
					<p>
						LAFONTANASANTJOAN.ES desafía todas las garantías, explícitas o
						implícitas, incluyendo pero no limitándose a las garantías de
						comercio justo y aptitud para un propósito específico.
					</p>
					<h2>6. Limitación de Responsabilidad</h2>
					<p>
						En ninguna circunstancia LAFONTANASANTJOAN.ES será liable por
						cualquier daño que surja del uso del Sitio Web, incluyendo pero no
						limitándose a los daños accesorios, consecutivos o punitivos.
					</p>
					<h2>7. Ley y Jurisdicción</h2>
					<p>
						Estos Términos y Condiciones serán gobernados y interpretados en
						conformidad con las leyes de [Tu Estado/Country].
					</p>
					<p>
						Cualquier disputa que surja de estos Términos y Condiciones será
						resuelta a través de arbitraje unificado en acuerdo con las reglas
						de la Asociación Americana de Arbitraje.
					</p>
					<h2>8. Terminación</h2>
					<p>
						LAFONTANASANTJOAN.ES puede terminar o suspender su acceso al Sitio
						Web en cualquier momento, sin aviso previo, por cualquier razón.
					</p>
				</>
			) : (
				<>
					<h1>Termes i Condicions</h1>
					<h2>1. Introducció</h2>
					<p>
						Benvingut a LAFONTANASANTJOAN.ES (el "Lloc Web"). En accedir o
						utilitzar el Lloc Web, vostè (l'"Usuari") accepta estar obligat per
						aquests Termes i Condicions.
					</p>
					<h2>2. Acceptació de Termes</h2>
					<p>
						En utilitzar el Lloc Web, vostè reconeix que ha llegit, entès i
						accepta estar obligat per aquests Termes i Condicions.
					</p>
					<h2>3. Conducta de l'Usuari</h2>
					<p>Vostè es compromet a no:</p>
					<ul>
						<li>
							Utilitzar el Lloc Web per a qualsevol activitat il·legal o
							perjudicial
						</li>
						<li>
							Publicar, pujar o transmetre qualsevol contingut que sigui
							difamatori, obscè o invasiu de la privacitat d'una altra persona
						</li>
						<li>Interferir amb o interrompre l'operació del Lloc Web</li>
						<li>Intentar accedir o manipular el codi font del Lloc Web</li>
					</ul>
					<h2>4. Propietat Intel·lectual</h2>
					<p>
						LAFONTANASANTJOAN.ES posseeix tots els drets, títol i interès en i a
						respecte del Lloc Web, incloent però no limitant-se als drets de
						propietat intel·lectual com els drets d'autor, marques registrades i
						patents.
					</p>
					<p>Vostè es compromet a no:</p>
					<ul>
						<li>
							Copiar, reproduir o distribuir qualsevol contingut del Lloc Web
							sense permís
						</li>
						<li>
							Utilitzar qualsevol marca, logotip o símbol de
							LAFONTANASANTJOAN.ES sense permís
						</li>
					</ul>
					<h2>5. Desacord de Garanties</h2>
					<p>
						LAFONTANASANTJOAN.ES desafia totes les garanties, explícites o
						implícites, incloent però no limitant-se a les garanties de comerç
						just i aptitud per a un propòsit específic.
					</p>
					<h2>6. Limitació de Responsabilitat</h2>
					<p>
						En cap circumstància LAFONTANASANTJOAN.ES serà responsable per
						qualsevol dany que sorgeixi de l'ús del Lloc Web, incloent però no
						limitant-se als danys accessoris, consecutius o punitius.
					</p>
					<h2>7. Llei i Jurisdicció</h2>
					<p>
						Aquests Termes i Condicions seran governats i interpretats en
						conformitat amb les lleis de [El teu Estat/País].
					</p>
					<p>
						Qualsevol disputa que sorgeixi d'aquests Termes i Condicions serà
						resolta a través d'arbitratge unificat d'acord amb les regles de
						l'Associació Americana d'Arbitratge.
					</p>
					<h2>8. Terminació</h2>
					<p>
						LAFONTANASANTJOAN.ES pot terminar o suspendre el seu accés al Lloc
						Web en qualsevol moment, sense avís previ, per qualsevol raó.
					</p>
				</>
			)}
		</Carta>
	);
};

export default Terms;
