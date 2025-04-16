export interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  longDescription: string
  icon: string // Lucide icon name
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  cta: {
    title: string
    description: string
  }
}

export const servicesData: Service[] = [
  {
    id: "personal-injury",
    title: "Personal Injury",
    slug: "personal-injury",
    shortDescription: "Expert representation for victims of accidents and injuries caused by negligence.",
    longDescription:
      "Our personal injury attorneys have decades of combined experience helping victims recover compensation for injuries caused by others' negligence. We handle all types of personal injury cases, from car accidents to slip and falls, and fight tirelessly to ensure you receive the maximum compensation possible for your injuries, medical bills, lost wages, and pain and suffering.",
    icon: "Shield",
    benefits: [
      "Free initial consultation to evaluate your case",
      "No fees unless we win your case",
      "Comprehensive investigation of accident causes",
      "Expert medical witness testimony",
      "Aggressive negotiation with insurance companies",
      "Trial-ready legal representation",
    ],
    process: [
      {
        title: "Free Case Evaluation",
        description:
          "We begin with a thorough evaluation of your case to determine liability, damages, and potential compensation.",
      },
      {
        title: "Investigation & Evidence Collection",
        description:
          "Our team gathers all necessary evidence, including accident reports, medical records, witness statements, and expert opinions.",
      },
      {
        title: "Case Building & Documentation",
        description:
          "We build a compelling case that clearly establishes liability and fully documents all your damages and losses.",
      },
      {
        title: "Negotiation & Settlement",
        description:
          "We negotiate aggressively with insurance companies to secure a fair settlement that covers all your needs.",
      },
      {
        title: "Litigation When Necessary",
        description:
          "If a fair settlement cannot be reached, we're prepared to take your case to trial and advocate powerfully on your behalf.",
      },
    ],
    faqs: [
      {
        question: "How much is my personal injury case worth?",
        answer:
          "The value of your case depends on several factors, including the severity of your injuries, medical expenses, lost wages, property damage, pain and suffering, and the impact on your quality of life. Our attorneys will provide a realistic assessment based on our experience with similar cases.",
      },
      {
        question: "How long do I have to file a personal injury claim?",
        answer:
          "Statutes of limitations vary by state, typically ranging from 1-3 years from the date of injury. Certain claims, such as those against government entities, may have even shorter deadlines. It's crucial to consult an attorney promptly after an injury.",
      },
      {
        question: "Will my personal injury case go to trial?",
        answer:
          "Most personal injury cases settle before trial, but we prepare every case as if it will go to court. This thorough approach often results in better settlement offers. If the insurance company refuses to offer fair compensation, our experienced trial attorneys are fully prepared to advocate for you in court.",
      },
    ],
    cta: {
      title: "Injured Due to Someone's Negligence?",
      description:
        "Don't face the insurance companies alone. Our experienced personal injury attorneys will fight for the compensation you deserve while you focus on recovery.",
    },
  },
  {
    id: "car-accidents",
    title: "Car Accidents",
    slug: "car-accidents",
    shortDescription: "Expert representation for victims of automobile accidents to secure maximum compensation.",
    longDescription:
      "Our car accident attorneys provide comprehensive legal representation to individuals injured in automobile collisions. We handle all aspects of your claim, from investigation and evidence gathering to negotiation with insurance companies and litigation when necessary, allowing you to focus on recovery while we pursue the compensation you deserve.",
    icon: "Car",
    benefits: [
      "Immediate investigation of accident scenes",
      "Access to accident reconstruction experts",
      "Comprehensive documentation of all damages",
      "Skilled negotiation with insurance adjusters",
      "Experience with complex multi-vehicle accidents",
      "Knowledge of state-specific traffic laws",
    ],
    process: [
      {
        title: "Accident Investigation",
        description:
          "We thoroughly investigate the accident scene, gather evidence, and identify all potentially liable parties.",
      },
      {
        title: "Medical Documentation",
        description:
          "We ensure all your injuries are properly documented and work with medical experts to project future care needs.",
      },
      {
        title: "Insurance Claim Filing",
        description:
          "We handle all communications with insurance companies, ensuring your claim is properly filed and documented.",
      },
      {
        title: "Damage Assessment",
        description:
          "We calculate the full extent of your damages, including vehicle repairs, medical expenses, lost wages, and pain and suffering.",
      },
      {
        title: "Settlement Negotiation or Litigation",
        description:
          "We negotiate aggressively for a fair settlement or take your case to court if necessary to secure proper compensation.",
      },
    ],
    faqs: [
      {
        question: "What should I do immediately after a car accident?",
        answer:
          "First, ensure everyone's safety and call 911 for any injuries. Move vehicles out of traffic if possible and safe to do so. Exchange information with other drivers and collect contact information from witnesses. Take photos of the accident scene, vehicle damage, and any visible injuries. Report the accident to the police and your insurance company, but avoid discussing fault until you've consulted with an attorney.",
      },
      {
        question: "How long do I have to file a car accident claim?",
        answer:
          "Statutes of limitations for car accident claims vary by state, typically ranging from 1-4 years. However, it's important to begin the legal process as soon as possible while evidence is fresh and witnesses' memories are clear. Additionally, insurance policies often require prompt notification of accidents.",
      },
      {
        question: "What compensation can I recover after a car accident?",
        answer:
          "Potential compensation includes medical expenses (current and future), lost wages and diminished earning capacity, vehicle repair or replacement costs, rental car expenses, pain and suffering, emotional distress, and loss of enjoyment of life. In cases involving serious misconduct like drunk driving, punitive damages may also be available.",
      },
    ],
    cta: {
      title: "Injured in a Car Accident?",
      description:
        "Don't let insurance companies minimize your claim. Our experienced car accident attorneys will fight for the full compensation you deserve for your injuries and losses.",
    },
  },
  {
    id: "truck-accidents",
    title: "Truck Accidents",
    slug: "truck-accidents",
    shortDescription: "Specialized legal support for victims of commercial truck and 18-wheeler accidents.",
    longDescription:
      "Truck accident cases involve unique challenges and complexities that require specialized legal knowledge. Our truck accident attorneys understand the federal regulations governing the trucking industry, the multiple parties that may share liability, and the catastrophic nature of injuries that often result from these collisions.",
    icon: "Truck",
    benefits: [
      "Knowledge of federal trucking regulations",
      "Experience with commercial insurance policies",
      "Access to top accident reconstruction experts",
      "Ability to identify all liable parties",
      "Understanding of trucking industry practices",
      "Resources to handle catastrophic injury cases",
    ],
    process: [
      {
        title: "Immediate Investigation",
        description:
          "We act quickly to preserve critical evidence like black box data, driver logs, and maintenance records before they can be altered or destroyed.",
      },
      {
        title: "Regulatory Compliance Review",
        description:
          "We analyze whether the trucking company and driver were in compliance with all applicable federal and state regulations.",
      },
      {
        title: "Multiple Liability Assessment",
        description:
          "We identify all potentially liable parties, including the driver, trucking company, vehicle manufacturer, and maintenance providers.",
      },
      {
        title: "Comprehensive Damages Calculation",
        description:
          "We document the often substantial damages in truck accident cases, including catastrophic injuries requiring lifetime care.",
      },
      {
        title: "Strategic Case Resolution",
        description:
          "We leverage our knowledge of the trucking industry to negotiate effectively or litigate aggressively when necessary.",
      },
    ],
    faqs: [
      {
        question: "Who can be held liable in a truck accident case?",
        answer:
          "Multiple parties may share liability in truck accident cases, including the truck driver, trucking company, vehicle manufacturer, maintenance provider, cargo loader, and even government entities responsible for road conditions. Our attorneys conduct thorough investigations to identify all potentially liable parties and their insurance coverage.",
      },
      {
        question: "What makes truck accident cases different from car accidents?",
        answer:
          "Truck accident cases involve unique factors including federal regulations, industry standards, complex ownership and employment relationships, multiple insurance policies, and typically more severe injuries. These cases often require specialized knowledge of the trucking industry and the resources to take on large trucking companies and their insurers.",
      },
      {
        question: "How soon should I contact an attorney after a truck accident?",
        answer:
          "You should contact an attorney as soon as possible after a truck accident. Trucking companies often dispatch rapid response teams to accident scenes immediately to gather evidence and build their defense. Early attorney involvement allows for preservation of critical evidence through legal holds and independent investigation.",
      },
    ],
    cta: {
      title: "Injured in a Truck Accident?",
      description:
        "Commercial truck accidents can cause devastating injuries. Our specialized truck accident attorneys have the expertise to take on trucking companies and their insurers to secure the compensation you deserve.",
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug)
}
