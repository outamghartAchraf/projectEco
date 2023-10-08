import './LoginIn.css'

const LoginIn = () => {
  return (
    <div className="container20">
    <form className='form1'>
        <h2>Connectez-vous à votre compte</h2>
        <label for="email" className="label1">Adresse e-mail</label>
        <input className="int1" type="email" id="email" name="email" placeholder="Entrez votre adresse e-mail" required/>
        <label for="password" className="label1">Mot de passe</label>
        <input className="int1" type="password" id="password" name="password" placeholder="Entrez votre mot de passe" required/>
        <button className="btn20" type="submit">Se connecter</button>
        <p>Pas encore de compte ? <a href="#">Inscrivez-vous ici</a>.</p>
    </form>
</div>
  )
}

export default LoginIn
