import { useState } from 'react'

const TwitterFollowCard = ({ UserName, children, initialisFollowing }) => {
    const [isFollowing, setisFollowing] = useState(initialisFollowing)
    const [isHovered, setIsHovered] = useState(false) // New state for hover

    const text = isFollowing
        ? (isHovered ? 'Dejar de seguir' : 'Siguiendo')
        : 'Seguir'

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const HandleClick = () => {
        setisFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard" style={{ display: 'flex', alignItems: 'center' }}>
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${UserName}`} alt="JonesProgrammer" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{UserName}</span>
                </div>
            </header>

            <aside>
                <button
                    className={buttonClassName}
                    onClick={HandleClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {text}
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard