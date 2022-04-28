import React from 'react'

const Search = () => {
  return (
      <div className="w-full h-36 flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold text-gray-50">
              Hello Gift where are you going today
          </h1>
          <div className="w-8/12 h-16 rounded-full bg-red-100 mt-3 flex items-center justify-center">
              <select className=" h-full text-gray-800 w-56 bg-red-100">
                  <option>
                      from
                  </option>
                  <option>
                      Kimara
                  </option>
                  <option>
                      Mbezi
                  </option>
                  <option>
                      Tabata
                  </option>
                  <option>
                      Sinza
                  </option>
                  <option>
                      Banana
                  </option>
              </select>
              <select className=" h-full text-gray-800 w-56 bg-red-100">
                  <option>
                      to
                  </option>
                  <option>
                      Kimara
                  </option>
                  <option>
                      Mbezi
                  </option>
                  <option>
                      Tabata
                  </option>
                  <option>
                      Sinza
                  </option>
                  <option>
                      Banana
                  </option>
              </select>
              <div className="ml-16">
                <button className="bg-blue-600 rounded-lg px-10 py-2 ">
                    Go
                </button>
              </div>
          </div>
      </div>
  )
}

export default Search