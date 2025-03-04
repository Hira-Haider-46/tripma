import pf_1 from "../assets/avatar_1.png";
import pf_2 from "../assets/avatar_2.png";
import pf_3 from "../assets/avatar_3.png";
import star from "../assets/star.png";
import star_1 from "../assets/star_1.png";

const Comments: React.FC = () => {
  return (
    <div className="p-6 md:p-10 text-gray-500 mb-10">
      <h1 className="text-center my-5 font-semibold text-2xl">
        What <span className="text-indigo-500">Tripma</span> users are saying
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-12">
        {[ 
          { 
            img: pf_1, name: "Yifei Chen", location: "Seoul, South Korea | April 2019", 
            stars: 5, review: "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me."
          },
          { 
            img: pf_2, name: "Kaori Yamaguchi", location: "Honolulu, Hawaii | February 2017", 
            stars: 4.5, review: "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommended to us by a long-time friend, and I'm so glad we tried it out! The process was easy."
          },
          { 
            img: pf_3, name: "Anthony Lewis", location: "Berlin, Germany | April 2019", 
            stars: 5, review: "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experience so I figured I'd give it a try. It was my first time using Tripma, but I'd definitely recommend it to a friend."
          }
        ].map((comment, index) => (
          <div key={index} className="w-full md:w-1/3 flex gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <img src={comment.img} alt={comment.name} />
            </div>
            <div className="flex-1">
              <h2 className="font-medium">{comment.name}</h2>
              <p>{comment.location}</p>
              <div className="flex flex-row my-2 gap-1">
                {Array.from({ length: Math.floor(comment.stars) }, (_, i) => (
                  <img key={i} src={star} alt="star" />
                ))}
                {comment.stars % 1 !== 0 && <img src={star_1} alt="star" />}
              </div>
              <p className="text-gray-800 text-sm">{comment.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;