'use client'

import { useState, useEffect, useRef } from 'react'

type Message = {
  id: string
  type: 'bot' | 'user'
  text: string
}

type Option = {
  label: string
  value: string
}

type Step = {
  id: string
  message: string
  options: Option[]
}

const FLOWS: Record<string, Step[]> = {
  initial: [
    {
      id: 'who',
      message: '¡Hola! Soy Timón 👋 ¿Con quién hablo?',
      options: [
        { label: 'Soy estudiante', value: 'estudiante' },
        { label: 'Soy padre/madre', value: 'padre' },
        { label: 'Represento un colegio', value: 'colegio' },
        { label: 'Represento una universidad', value: 'universidad' },
      ],
    },
  ],
  estudiante: [
    {
      id: 'momento',
      message: 'Genial. ¿En qué momento estás?',
      options: [
        { label: 'Estoy en el secundario (me falta tiempo)', value: 'temprano' },
        { label: 'Estoy terminando (es urgente)', value: 'urgente' },
        { label: 'Ya terminé y no sé qué hacer', value: 'egresado' },
      ],
    },
    {
      id: 'problema',
      message: '¿Qué es lo que más te preocupa ahora mismo?',
      options: [
        { label: 'No sé qué me gusta de verdad', value: 'gusto' },
        { label: 'Hay demasiadas carreras', value: 'opciones' },
        { label: 'No sé si lo que me gusta tiene futuro', value: 'futuro' },
        { label: 'No sé cuánto cuesta ni dónde estudiar', value: 'costos' },
      ],
    },
    {
      id: 'contacto',
      message: 'Entiendo. Timón está hecho exactamente para eso. ¿Cómo seguimos?',
      options: [
        { label: 'Quiero que me contacten', value: 'contactar' },
        { label: 'Prefiero contactarlos yo', value: 'yo_contacto' },
        { label: 'Quiero agendar 20 minutos', value: 'agendar' },
      ],
    },
  ],
  padre: [
    {
      id: 'hijo',
      message: '¿Tu hijo/a ya está pensando en qué estudiar?',
      options: [
        { label: 'Sí, pero no sabe qué elegir', value: 'pensando' },
        { label: 'Todavía no, quiero anticiparme', value: 'anticipar' },
        { label: 'Eligió algo pero no estoy seguro/a', value: 'dudas' },
      ],
    },
    {
      id: 'preocupacion',
      message: '¿Qué es lo que más te preocupa?',
      options: [
        { label: 'Que elija algo sin futuro laboral', value: 'futuro' },
        { label: 'Que elija por presión social', value: 'presion' },
        { label: 'Que no se conozca bien y se arrepienta', value: 'conocerse' },
        { label: 'Los costos universitarios', value: 'costos' },
      ],
    },
    {
      id: 'contacto',
      message: 'Timón da exactamente esa claridad — para vos y para tu hijo/a. ¿Cómo seguimos?',
      options: [
        { label: 'Quiero que me contacten', value: 'contactar' },
        { label: 'Prefiero contactarlos yo', value: 'yo_contacto' },
        { label: 'Quiero agendar 20 minutos', value: 'agendar' },
      ],
    },
  ],
  colegio: [
    {
      id: 'año',
      message: '¿Qué año tienen sus estudiantes?',
      options: [
        { label: '4to y 5to año', value: '4y5' },
        { label: 'Solo 5to / egresados', value: '5' },
        { label: 'Varios años', value: 'varios' },
      ],
    },
    {
      id: 'contacto',
      message: 'Tenemos una propuesta específica para colegios. ¿Cómo los contactamos?',
      options: [
        { label: 'Agendemos una llamada', value: 'agendar' },
        { label: 'Mandennos info por mail', value: 'contactar' },
        { label: 'Los contacto yo', value: 'yo_contacto' },
      ],
    },
  ],
  universidad: [
    {
      id: 'area',
      message: '¿Para qué área están evaluando Timón?',
      options: [
        { label: 'Ingreso y retención de alumnos', value: 'ingreso' },
        { label: 'Orientación vocacional institucional', value: 'orientacion' },
        { label: 'Área de bienestar estudiantil', value: 'bienestar' },
      ],
    },
    {
      id: 'contacto',
      message: 'Tenemos casos de uso específicos para universidades. ¿Cómo seguimos?',
      options: [
        { label: 'Quiero una demo', value: 'agendar' },
        { label: 'Mandennos información', value: 'contactar' },
        { label: 'Los contacto yo', value: 'yo_contacto' },
      ],
    },
  ],
}

const CONTACT_CONTENT = {
  contactar: {
    message: '¡Perfecto! Escribinos y te respondemos pronto:',
    actions: [
      { label: '📧 Escribir por mail', href: 'mailto:hola@timon.com.ar', primary: true },
    ],
  },
  yo_contacto: {
    message: 'Podés escribirnos por WhatsApp o por mail:',
    actions: [
      { label: '💬 WhatsApp', href: 'https://wa.me/5491100000000', primary: true },
      { label: '📧 Mail', href: 'mailto:hola@timon.com.ar', primary: false },
    ],
  },
  agendar: {
    message: 'Agendá 20 minutos con nuestro equipo:',
    actions: [
      { label: '📅 Agendar llamada', href: 'https://calendly.com/timon', primary: true },
    ],
  },
}

export function ChatFunnel() {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentOptions, setCurrentOptions] = useState<Option[]>([])
  const [userType, setUserType] = useState<string | null>(null)
  const [stepIndex, setStepIndex] = useState(0)
  const [contactType, setContactType] = useState<string | null>(null)
  const [showOptions, setShowOptions] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const addBotMessage = (text: string, delay = 0) => {
    return new Promise<void>((resolve) => {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: 'bot',
            text,
          },
        ])
        resolve()
      }, delay)
    })
  }

  useEffect(() => {
    const init = async () => {
      await addBotMessage(FLOWS.initial[0].message, 600)
      setCurrentOptions(FLOWS.initial[0].options)
      setShowOptions(true)
    }
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, currentOptions, isTyping])

  const handleOption = async (option: Option) => {
    setShowOptions(false)
    setCurrentOptions([])

    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: 'user',
        text: option.label,
      },
    ])

    if (!userType) {
      const type = option.value
      setUserType(type)
      const flow = FLOWS[type]
      if (flow && flow.length > 0) {
        await addBotMessage(flow[0].message, 800)
        setStepIndex(1)
        setCurrentOptions(flow[0].options)
        setShowOptions(true)
      }
      return
    }

    const flow = FLOWS[userType]
    const isContactStep =
      option.value === 'contactar' ||
      option.value === 'yo_contacto' ||
      option.value === 'agendar'

    if (isContactStep) {
      setContactType(option.value)
      const content = CONTACT_CONTENT[option.value as keyof typeof CONTACT_CONTENT]
      await addBotMessage(content.message, 800)
      return
    }

    if (stepIndex < flow.length) {
      const nextStep = flow[stepIndex]
      await addBotMessage(nextStep.message, 800)
      setStepIndex((prev) => prev + 1)
      setCurrentOptions(nextStep.options)
      setShowOptions(true)
    }
  }

  return (
    <div
      className="bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
      style={{ minHeight: '520px', maxHeight: '580px' }}
    >
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
        <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm">
          T
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">Timón</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-400">En línea</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.type === 'bot'
                  ? 'bg-gray-100 text-gray-800 rounded-tl-sm'
                  : 'bg-violet-600 text-white rounded-tr-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1 items-center h-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {contactType && !isTyping && (
          <div className="flex flex-col gap-2 mt-2">
            {CONTACT_CONTENT[contactType as keyof typeof CONTACT_CONTENT].actions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  action.primary
                    ? 'bg-violet-600 hover:bg-violet-700 text-white'
                    : 'border border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
              >
                {action.label}
              </a>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {showOptions && currentOptions.length > 0 && (
        <div className="p-4 border-t border-gray-100 flex flex-col gap-2">
          {currentOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOption(option)}
              className="text-left px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 transition-all duration-150 font-medium"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
