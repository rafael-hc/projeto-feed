import igniteLogo from '../assets/ignite-logo.svg'

export function Header(){
    return(
        <header className="bg-gray-800 py-5 flex justify-center gap-4">
            <img className='h-8' src={igniteLogo} alt="Logotipo do ignite" />
            <strong>Ignite Feed</strong>
        </header>
    );
}