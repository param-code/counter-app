/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<section className="p-[40px] bg-white pt-[100px] ">
			<div>
				<div className="text-center">
					<div className="h-[400px] bg-center bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] ">
						<h1 className="text-center lg:text-6xl  text-2xl font-extrabold text-black ">
							404 - Page Not Found !!
						</h1>
					</div>

					<div className="-mt-12 ">
						<h3 className="text-4xl mb-1 font-semibold ">
							Look like you're lost
						</h3>

						<p className="font-semibold">
							The page you are looking for not available!
						</p>

						<Link
							to="/"
							className=" py-[13px] px-10 text-lg  bg-gray-500 hover:bg-gray-600 my-5 inline-block rounded-lg font-semibold duration-300">
							Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Error;
