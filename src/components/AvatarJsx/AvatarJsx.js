import './AvatarJsx.css';

const AvatarJsx = () => {
    const src = `https://randomuser.me/api/portraits/lego/2.jpg`

    return (
        <picture>
            <img src={src} alt='avatar'/>
            Andres
        </picture>
    )
}

export default AvatarJsx