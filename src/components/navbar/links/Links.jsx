import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const LinksRight = () => {

    const links = [
        {
            title: 'Nature',
            path: '#',
        },
        {
            title: 'People',
            path: '#',
        },
        {
            title: 'Trips',
            path: '#',
        },
        {
            title: 'Animals',
            path: '#',
        },
        {
            title: 'Fashion',
            path: '#',
        },
        {
            title: 'Tech',
            path: '#',
        },
        {
            title: '...',
            path: '#',
        },
    ]

    return(
        <div>
            {links.map(link => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            ))}
        </div>
    )
}

const LinksLeft = () => {
    const links = [
        {
            title: 'About',
            path: '#',
        },
        {
            title: 'Cooperation',
            path: '#',
        },
        {
            title: 'Contact',
            path: '#',
        },
    ]
    return(
        <div>
            <Link href='#' key={faSearch}><FontAwesomeIcon icon={faSearch} /></Link>
            {links.map(link => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            ))}
        </div>
    )
}

export {LinksRight, LinksLeft}