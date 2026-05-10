import React, { useState } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { contactsData } from '../data/mockData'
import Navbar from '../components/Navbar'
import TriggerAutomationModal from '../components/TriggerAutomationModal'
import ImportContactsModal from '../components/ImportContactsModal'

function ContactsPage() {
  const [contacts, setContacts] = useState(contactsData)
  const [selectedContacts, setSelectedContacts] = useState([])
  const [isAutomationModalOpen, setIsAutomationModalOpen] = useState(false)
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(contacts.map(c => c.id))
    }
  }

  const toggleSelectContact = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(cid => cid !== id))
    } else {
      setSelectedContacts([...selectedContacts, id])
    }
  }

  const handleDelete = () => {
    setContacts(contacts.filter(c => !selectedContacts.includes(c.id)))
    setSelectedContacts([])
  }

  return (
    <div>
      <Navbar onImportClick={() => setIsImportModalOpen(true)} />

      <div className="rounded-[20px] bg-white p-6 shadow-sm border border-zinc-100">
        {/* Bulk Action Bar */}
        <div className="mb-6 flex items-center gap-4">
          {selectedContacts.length > 0 && (
            <div className="flex items-center gap-4 border-r border-zinc-200 pr-4">
              <span className="text-sm font-semibold text-zinc-900">{selectedContacts.length} Contact Selected</span>
              <button 
                onClick={toggleSelectAll}
                className="rounded-lg border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50"
              >
                {selectedContacts.length === contacts.length ? 'Deselect All' : 'Select All'}
              </button>
              <button 
                onClick={handleDelete}
                className="rounded-lg border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50"
              >
                Delete
              </button>
              <button 
                onClick={() => setIsAutomationModalOpen(true)}
                className="rounded-lg bg-[#1a1c1e] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black"
              >
                Trigger Automation
              </button>
            </div>
          )}
          
          <div className="flex-1">
            <p className="mb-2 text-xs font-medium text-zinc-500">Search</p>
            <div className="relative max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search name, email, business..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-zinc-100 bg-[#f9f9f9] py-2 pl-9 pr-4 text-sm outline-none focus:border-[#ea8d3f] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-50 text-[13px] font-semibold text-zinc-900">
                <th className="pb-4 pl-2">
                  <input 
                    type="checkbox" 
                    checked={selectedContacts.length === contacts.length && contacts.length > 0}
                    onChange={toggleSelectAll}
                    className="h-4 w-4 rounded border-zinc-300 accent-[#ea8d3f]" 
                  />
                </th>
                <th className="pb-4 px-4 font-medium">Contact Name</th>
                <th className="pb-4 px-4 font-medium">Phone</th>
                <th className="pb-4 px-4 font-medium">Email</th>
                <th className="pb-4 px-4 font-medium">Business Name</th>
                <th className="pb-4 px-4 font-medium">Created Date</th>
                <th className="pb-4 px-4 font-medium">Tags</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {contacts.map((contact) => (
                <tr key={contact.id} className="group hover:bg-zinc-50/50 transition-colors">
                  <td className="py-4 pl-2">
                    <input 
                      type="checkbox" 
                      checked={selectedContacts.includes(contact.id)}
                      onChange={() => toggleSelectContact(contact.id)}
                      className="h-4 w-4 rounded border-zinc-300 accent-[#ea8d3f]" 
                    />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white">
                        {contact.avatar}
                      </div>
                      <span className="text-sm font-medium text-zinc-900">{contact.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-zinc-600">{contact.phone}</td>
                  <td className="py-4 px-4 text-sm text-zinc-600">{contact.email}</td>
                  <td className="py-4 px-4 text-sm text-zinc-600">{contact.business}</td>
                  <td className="py-4 px-4 text-sm text-zinc-600">{contact.date}</td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1.5">
                      {contact.tags.map((tag, i) => (
                        <span key={i} className="rounded-full bg-orange-50 px-2.5 py-0.5 text-[11px] font-medium text-orange-600 border border-orange-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between border-t border-zinc-50 pt-6">
          <p className="text-xs font-medium text-[#ea8d3f]">Page 1 of 2</p>
          <div className="flex items-center gap-2">
            <button className="flex h-8 items-center gap-1 rounded-lg border border-zinc-100 px-3 text-xs font-medium text-zinc-500 hover:bg-zinc-50">
              <ChevronLeft size={14} /> Prev
            </button>
            <button className="flex h-8 items-center gap-1 rounded-lg border border-zinc-200 px-3 text-xs font-bold text-zinc-900 hover:bg-zinc-50 shadow-sm">
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <TriggerAutomationModal 
        isOpen={isAutomationModalOpen} 
        onClose={() => setIsAutomationModalOpen(false)} 
      />
      <ImportContactsModal 
        isOpen={isImportModalOpen} 
        onClose={() => setIsImportModalOpen(false)} 
      />
    </div>
  )
}

export default ContactsPage
