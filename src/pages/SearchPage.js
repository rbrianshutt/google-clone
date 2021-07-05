import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider/StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();

	//LIVE API CALL
	const { data } = useGoogleSearch(term);

	//MOCK API CALL
	//const data = Response;

	//https://developers.google.com/custom-search/v1/using_rest

	//https://cse.google.com/cse/create/new

	console.log(data);

	return (
		<div className='searchPage'>
			<div className='searchPage__header'>
				<Link to='/'>
					<img
						className='searchPage__logo'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png'
						alt=''
					/>
				</Link>
				<div className='searchPage__headerBody'>
					<Search hideButtons />
					<div className='searchPage__options'>
						<div className='searchPage__optionsLeft'>
							<div className='searchPage__option'>
								<SearchIcon />
								<Link to='/all'>All</Link>
							</div>
							<div className='searchPage__option'>
								<DescriptionIcon />
								<Link to='/news'>News</Link>
							</div>
							<div className='searchPage__option'>
								<ImageIcon />
								<Link to='/images'>Images</Link>
							</div>
							<div className='searchPage__option'>
								<LocalOfferIcon />
								<Link to='/shopping'>Shopping</Link>
							</div>
							<div className='searchPage__option'>
								<RoomIcon />
								<Link to='/maps'>Maps</Link>
							</div>
							<div className='searchPage__option'>
								<MoreVertIcon />
								<Link to='/more'>More</Link>
							</div>
						</div>
						<div className='searchPage__optionsRight'>
							<div className='searchPage__option'>
								<Link to='/tools'>Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='searchPage__results'>
				{term && (
					<div className='searchPage__results'>
						<p className='searchPage__resultCount'>
							About {data?.searchInformation.formattedTotalResults} results (
							{data?.searchInformation.formattedSearchTime} seconds) for {term}
						</p>
						{data?.items.map((item) => (
							<div className='searchPage__result'>
								<a href={item.link} target='_blank'>
									{item.pagemap?.cse_image?.length > 0 &&
										item.pagemap?.cse_image[0]?.src && (
											<img
												className='searchPage__resultImage'
												src={
													item.pagemap?.cse_image?.length > 0 &&
													item.pagemap?.cse_image[0]?.src
												}
												alt=''
											/>
										)}
									{item.displayLink}
								</a>
								<a className='searchPage__resultTitle' href={item.link} target='_blank'>
									<h2>{item.title}</h2>
								</a>
								<p className='searchPage__resultSnippet'>{item.snippet}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchPage;
