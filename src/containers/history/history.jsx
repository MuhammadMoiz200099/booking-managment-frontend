import React from 'react'

const History = () => {
  return (
    <div class="relative overflow-x-auto">
      <div>

      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Booking Id
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Time
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              LABNLSDBN123BNASDLN123LNASD
            </th>
            <td class="px-6 py-4">
              23-APRIL-2024
            </td>
            <td class="px-6 py-4">
              01:50 PM
            </td>
            <td class="px-6 py-4">
              1000 RS
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              ASDFVAJSVDHVKASVDKAVKSHDVKAS
            </th>
            <td class="px-6 py-4">
              22-APRIL-2024
            </td>
            <td class="px-6 py-4">
              01:50 PM
            </td>
            <td class="px-6 py-4">
              1000 RS
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              MVZMXCVHJASVDYFQDAVDVVAKSDV
            </th>
            <td class="px-6 py-4">
              21-APRIL-2024
            </td>
            <td class="px-6 py-4">
              01:50 PM
            </td>
            <td class="px-6 py-4">
              1000 RS
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History