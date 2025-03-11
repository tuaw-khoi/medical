const Message = () => {
  return (
    <div className="min-w-[70%] mx-auto absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center h-[350px]">
        <img
          className="max-w-[40%] object-cover rounded-l-2xl"
          src="https://s3-alpha-sig.figma.com/img/5ef3/508f/f63d2b9b4c8962c331d5c41881880d23?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PYC9NIu1-bUCWYjzZHGMTg8DZ1-hhDHIlGhcT1MWzKzuqrWv89UxSorJ~W5ijD49Uqn0OA9xxtXf0S~557yqA1QowD6oL5Vwqot~~HSQZCQxoWGzPANwYW6PYmDwKL1hSi7lNjRgtwOGD~ezSzrX97PN9ea2mnWqUUa-Iyx2kTVzSvjf7qBvBGJNusXqoQVyzv7jLAFQaXj0BdjaUsjWrcxF8uM4EbyW9VWbIgvFMFbFQrKLgWYtP723izho9x2aQolRmztC9CzIkYuCJnNG5XxtaMQVIqUXRxhBkHlvq4aT52~kyBBVo-P7Do5nhUB-B7mmAgmnAlO9BTcWtAKltg__"
          alt=""
        />
        <div className="bg-[#186533] text-white p-20 flex flex-col space-y-5 rounded-r-2xl">
          <h3 className="">Message from Managing Director</h3>
          <p>
            Service to mankind is service to God. With much excitement with this
            noble idea, I started my professional career as a Surgeon with the
            Government Health Sector of Nepal way back in the year 1983. Later
            on, I established the first Nursing Home in the private sector at
            Birgunj in the year 1985{" "}
          </p>
          <span>Mr. Shahnawaz Ansari</span>
          <h4>Managing Director</h4>
        </div>
      </div>
    </div>
  );
};

export default Message;
