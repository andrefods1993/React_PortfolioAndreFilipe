import { FiBarChart2, FiDollarSign, FiCpu, FiPieChart } from "react-icons/fi";
import { AiOutlineForm, AiOutlineCode, AiOutlineLaptop } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const serviceData = [
	{
		title: "Gestão Empresarial",
		description:
			"Maximize a eficiência e acelere o crescimento da sua empresa com estratégias certeiras e reestruturações que fazem a diferença.",
		icon: <FiBarChart2 />,
	},
	{
		title: "Consultoria Financeira",
		description:
			"Transforme suas finanças! Análise precisa, planejamento eficiente e redução de custos para garantir mais lucro.",
		icon: <FiDollarSign />,
	},
	{
		title: "Automação de Processos",
		description:
			"Automatize tarefas e integre sistemas para liberar tempo e aumentar sua produtividade sem esforço.",
		icon: <FiCpu />,
	},
	{
		title: "Power BI e BI",
		description:
			"Deixe seus dados trabalharem por você! Dashboards poderosos e relatórios automatizados para decisões rápidas e inteligentes.",
		icon: <FiPieChart />,
	},
	{
		title: "Planilhas Personalizadas",
		description:
			"Planilhas feitas sob medida para otimizar sua gestão e facilitar tomadas de decisão, sem complicações.",
		icon: <AiOutlineForm />,
	},
	{
		title: "Sites e Landing Pages",
		description:
			"Impulsione sua presença digital com sites que convertem e designs modernos focados no seu sucesso.",
		icon: <AiOutlineLaptop />,
	},
	{
		title: "Programação Sob Medida",
		description:
			"Desenvolvimento de soluções tecnológicas personalizadas para resolver seus problemas com eficiência.",
		icon: <AiOutlineCode />,
	},
	{
		title: "Treinamentos e Capacitação",
		description:
			"Equipe treinada é sucesso garantido! Cursos práticos em Excel, Power BI e automação que fazem a diferença.",
		icon: <BsFillPeopleFill />,
	},
];

export default serviceData;
