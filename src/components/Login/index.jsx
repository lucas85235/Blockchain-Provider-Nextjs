import { useBlockchain } from '../../blockchain'
import PartListView from "../PartListView";
import Mint from "./Mint"

function Login() {

    const { isLoged, myTokens, doLogin } = useBlockchain()

    const handleLogin = async () => {
        await doLogin()
    }

    const notLogedPanel = () => {
        return (
            <div>
                <button onClick={handleLogin}>Connect MetaMask</button>
            </div>
        )
    }

    const isLogedPanel = () => {
        return (
            <div style={{
                textAlign: 'center',
            }}>
                <h1>Wallet is connected</h1>
                <div style={{ margin: '2rem' }}>
                    <PartListView tokens={myTokens} />
                </div>
                <Mint />
            </div>
        )
    }

    return (
        <div>
            {!isLoged ? notLogedPanel() : isLogedPanel()}
        </div>
    )
}

export default Login;
