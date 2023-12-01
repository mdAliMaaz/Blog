import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Socials = () => {
	return (
		<div className='links'>
			<a
				href='https://twitter.com/MdMaaz2907'
				target='_blank'
			>
				<div className='icons'>
					<FaSquareXTwitter className='icon' />
					Twitter
				</div>
			</a>
			<a
				href='https://www.linkedin.com/in/mohammed-ali-maaz-26962828b/'
				target='_blank'
			>
				<div className='icons'>
					<FaLinkedin className='icon' />
					LinkedIn
				</div>
			</a>
			<a
				href='https://github.com/mdAliMaaz'
				target='_blank'
			>
				<div className='icons'>
					<FaGithubSquare className='icon' />
					Github
				</div>
			</a>
		</div>
	);
};

export default Socials;
